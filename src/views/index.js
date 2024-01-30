import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {style_01} from '../styles/style_01';

const data = [
  {
    signo: 'Aries',
    dias: '21 marzo - 19 abril',
    elemento: 'Fuego',
    astro: 'Marte',
    piedra: 'Diamante',
	imagen: require('../imgs/signos/03_Aries.png'),
  },
  {
    signo: 'Tauro',
    dias: '20 abril - 20 mayo',
    elemento: 'Tierra',
    astro: 'Venus',
    piedra: 'Esmeralda',
	imagen: require('../imgs/signos/04_Tauro.png'),
  },
  {
    signo: 'Géminis',
    dias: '21 mayo - 20 junio',
    elemento: 'Aire',
    astro: 'Mercurio',
    piedra: 'Ágata',
	imagen: require('../imgs/signos/05_Geminis.png'),
  },
  {
    signo: 'Cáncer',
    dias: '21 junio - 22 julio',
    elemento: 'Agua',
    astro: 'Luna',
    piedra: 'Perla',
	imagen: require('../imgs/signos/06_Cancer.png'),
  },
  {
    signo: 'Leo',
    dias: '23 julio - 22 agosto',
    elemento: 'Fuego',
    astro: 'Sol',
    piedra: 'Rubí',
	imagen: require('../imgs/signos/07_Leo.png'),
  },
  {
    signo: 'Virgo',
    dias: '23 agosto - 22 septiembre',
    elemento: 'Tierra',
    astro: 'Mercurio',
    piedra: 'Jaspe',
	imagen: require('../imgs/signos/08_Virgo.png'),
  },
  {
    signo: 'Libra',
    dias: '23 septiembre - 22 octubre',
    elemento: 'Aire',
    astro: 'Venus',
    piedra: 'Zafiro',
	imagen: require('../imgs/signos/09_Libra.png'),
  },
  {
    signo: 'Escorpio',
    dias: '23 octubre - 21 noviembre',
    elemento: 'Agua',
    astro: 'Plutón',
    piedra: 'Ópalo',
	imagen: require('../imgs/signos/10_Escorpio.png'),
  },
  {
    signo: 'Sagitario',
    dias: '22 noviembre - 21 diciembre',
    elemento: 'Fuego',
    astro: 'Júpiter',
    piedra: 'Topacio',
	imagen: require('../imgs/signos/11_Sagitario.png'),
  },
  {
    signo: 'Capricornio',
    dias: '22 diciembre - 19 enero',
    elemento: 'Tierra',
    astro: 'Saturno',
    piedra: 'Ónice',
	imagen: require('../imgs/signos/12_Capricornio.png'),
  },
  {
    signo: 'Acuario',
    dias: '20 enero - 18 febrero',
    elemento: 'Aire',
    astro: 'Urano',
    piedra: 'Amatista',
	imagen: require('../imgs/signos/01_Acuario.png'),
  },
  {
    signo: 'Piscis',
    dias: '19 febrero - 20 marzo',
    elemento: 'Agua',
    astro: 'Neptuno',
    piedra: 'Aguamarina',
	imagen: require('../imgs/signos/02_Pisis.png'),
  },
];

const Index = () => {
  return (
    <View>
      <View style={style_01.divHeader}>
        <Image source={require('../imgs/logos/logo_universidad.png')} />
      </View>

      <View style={style_01.divMain}>
        <Text style={style_01.h1}>Practica 01 Eduard</Text>
        <Text style={style_01.p1}>Estamos realizando una practica del curso
        </Text>

        <ScrollView style={{marginTop: 8}}>{data.map(item => (
            <View style={style_01.tarjeta} key={item.signo}>
              <View style={style_01.imageContainer}>
			  <Image source={item.imagen} style={style_01.zodiacImage}/>

              </View>

              <View style={style_01.textContainer}>
                <Text style={style_01.zodiacText}>Signo: {item.signo}</Text>
                <Text style={style_01.zodiacText}>Días: {item.dias}</Text>
                <Text style={style_01.zodiacText}>
                  Elemento: {item.elemento}
                </Text>
                <Text style={style_01.zodiacText}>Astro: {item.astro}</Text>
                <Text style={style_01.zodiacText}>Piedra: {item.piedra}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={style_01.divFooter}>
        <Text style={style_01.textFooter}>
          Carrera de Tecnologías de Información
        </Text>
        <Text style={style_01.textFooter}>Sede del Pacífico</Text>
      </View>
    </View>
  );
};

export default Index;
