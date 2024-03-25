import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';

const HelloWorldComponent = () => {
const [randomNumber, setRandomNumber] = useState(null);

const generateRandomNumber = () => {
const randomNum = Math.floor(Math.random() * 100) + 1;
setRandomNumber(randomNum);
};
return (
<View style={{
backgroundColor: 'black',
marginTop: 50,
}}
>
<Text style={{
display: 'flex',
justifyContent: 'center',
color: 'white',
}}
>
Hello World
</Text>
<View
style={{
display: 'flex',
justifyContent: 'center',
width: '100%',
height: 50,
alignItems: 'center',
backgroundColor: 'black'
}}
>
<Text
style={{
fontSize: 17,
color: 'white',
}}
>Приложение для генерации случайного числа</Text>
<Text
style={{
fontSize: 17,
color: 'white',
}}
>от 1 до 100</Text>
</View>
<View
style={{
display: 'flex',
justifyContent: 'center',
width: '100%',
height: 100,
alignItems: 'center',
backgroundColor: 'black',
}}
>
<Text style={{
color: 'white',
}}>Нажмите на кнопку ниже</Text>
<Text style={{
color: 'white',
}}>для генерации числа</Text>
</View>
<View style={{
borderWidth: 2,
borderColor: 'white',
borderRadius: 10,
margin: 15,
}}
>
<Button title="Сгенерировать" onPress={generateRandomNumber} />
{randomNumber && <Text style={{
color: 'white',
display: 'flex',
justifyContent: 'center',
}}>Случайное число: {randomNumber}</Text>}
</View>
<View
style={{
display: 'flex',
justifyContent: 'center',
width: '100%',
height: '70%',
marginBottom: 0,
alignItems: 'center',
backgroundColor: 'black',
}}
>
<Text style={{
color: 'white',
}}>Приложение может пользоваться любой</Text>
<Text style={{
color: 'white',
}}>пятиклассник, при желании можно</Text>
<Text style={{
color: 'white',
}}>усовершенствовать программу,</Text>
<Text style={{
color: 'black',
}}>но мне лень))</Text>
</View>

</View>

);
};

export default HelloWorldComponent;