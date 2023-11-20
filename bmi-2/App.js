import React,{useState} from 'react';  
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: 
  {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    padding:20
  },
  group:
  {
    marginTop:20
  },
  button:
  {
    backgroundColor: 'lightblue',
    padding: 20,
    borderWidth: 1
  },
  buttonText:
  {
    fontSize: 30
  },
  input:
  {
    padding: 10,
    height: 40,
    borderWidth: 1
  },
  title:
  {
    fontSize: 20
  },
  center:
  {
    alignItems: 'center'
  }
});

export const BMI = () => {
  const [weight, setWeight] =useState(0);
  const [height, setHeight] =useState(0);
  const [bmi, setBmi]= useState(0);
  const [bmiCategory, setBmiCategory] = useState('');

  const compute=(w, h) => {
    let weight=parseFloat(w);
    let height=parseFloat(h);
    const calculatedBmi = weight / Math.pow(height / 100, 2);
    setBmi(calculatedBmi);

  if (calculatedBmi < 18.5) {
      setBmiCategory('Cân Nặng Thấp');
    } else if (calculatedBmi >= 18.5 && calculatedBmi < 25) {
      setBmiCategory('Bình Thường');
    } else if (calculatedBmi >=25 && calculatedBmi < 30){
      setBmiCategory('Tiền Béo Phì');
    } else if (calculatedBmi >=30 && calculatedBmi < 35){
      setBmiCategory('Béo Phì Độ I');
    } else if (calculatedBmi >=35 && calculatedBmi < 40){
      setBmiCategory('Béo Phì Độ II');
    } else if (calculatedBmi >= 40) {
      setBmiCategory('Béo Phì Độ III');
    }
  };

  const clearInputs = () => {
    setWeight(0);
    setHeight(0);
    setBmi(0);
    setBmiCategory('');
  };

  return ( 
    <View style={styles.container}>
      <View style={styles.group}>
        <Text style={styles.title}> Weight (KG) </Text>
        <TextInput style={styles.input} 
        keyboardType='numeric'
        value={ weight}
        onChangeText={(w)=> setWeight(w)}
        />
      </View> 
      <View style={styles.group}>
        <Text style={styles.title}> Height (CM) </Text>
        <TextInput style={styles.input} 
        keyboardType='numeric'
        value={height}
        onChangeText={(h)=> setHeight(h)}
        />
      </View>
      <View style={styles.center}>
        <View style={styles.group}>
          <Text style={styles.title}>BMI: {bmi.toFixed(2)}</Text>
          <Text style={styles.title}>Category: {bmiCategory}</Text>
        </View>
       <View style={styles.group}>
          <TouchableOpacity style={styles.button} onPress={() => compute(weight, height)}>
            <Text style={styles.buttonText}> Compute </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={clearInputs}>
            <Text style={styles.buttonText}> Clear </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default BMI;
