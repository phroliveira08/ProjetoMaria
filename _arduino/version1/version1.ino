#include <Wire.h> //INCLUSÃO DE BIBLIOTECA
#include <BH1750.h> //INCLUSÃO DE BIBLIOTECA
 
BH1750 lightMeter; //CRIA UMA INSTÂNCIA

int statusLampCh1 = 0;
int statusLampCh2 = 0;

char serialRead = 'a';
char caseB = 'a';
char caseControl = 'a';
unsigned int val=0;
unsigned int calc=0;
unsigned int x=0;


 
void setup(){
  Serial.begin(9600); //INICIALIZA A SERIAL
  Wire.begin(); //INICIALIZA O I2C BUS
  lightMeter.begin(); //INICIALIZA A MEDIÇÃO DE LUMINOSIDADE
}
 
void loop() {
  float lux = lightMeter.readLightLevel(); //VARIÁVEL RECEBE O VALOR DE LUMINOSIDADE MEDIDO
  if (serialRead == 'a'){
    if(Serial.available()){
      serialRead = Serial.read();
    }else{
      Serial.println(-1);
    } 
  }
  if (serialRead == 'b'){
    if(Serial.available()){
      caseB = Serial.read();
    }
    if (caseB == 'a'){
      if(lux < 500){
        if(x < 100){
          x = x + 5;
          val = map(x, 0,100, 0, 255);
          analogWrite(3,val);
          analogWrite(5,val);
          statusLampCh1 = 1;
          statusLampCh2 = 1;
          Serial.print("Lux: ");
          Serial.println(lux);
        }else{
          x = 100;
          val = map(x, 0,100, 0, 255);
          analogWrite(3,val);
          analogWrite(5,val);
          statusLampCh1 = 1;
          statusLampCh2 = 1;
          Serial.print("Lux: ");
          Serial.println(lux);
        }
      }
      else{
        if(x > 0){
          x = x - 5;
          val = map(x, 0,100, 0, 255);
          analogWrite(3,val);
          analogWrite(5,val);
          statusLampCh1 = 1;
          statusLampCh2 = 1;
          Serial.print("Lux: ");
          Serial.println(lux);
        }else{
          x = 0;
          val = map(x, 0,100, 0, 255);
          analogWrite(3,val);
          analogWrite(5,val);
          statusLampCh1 = 0;
          statusLampCh2 = 0;
          Serial.print("Lux: ");
          Serial.println(lux);
        }
      } 
    }
    if (caseB == 'b'){
      if(lux < 250){
        if(x < 100){
          x = x + 5;
          val = map(x, 0,100, 0, 255);
          analogWrite(3,val);
          analogWrite(5,val);
          statusLampCh1 = 1;
          statusLampCh2 = 1;
          Serial.print("Lux: ");
          Serial.println(lux);
        }else{
          x = 100;
          val = map(x, 0,100, 0, 255);
          analogWrite(3,val);
          analogWrite(5,val);
          statusLampCh1 = 1;
          statusLampCh2 = 1;
          Serial.print("Lux: ");
          Serial.println(lux);
        }
      }
      else{
        if(x > 0){
          x = x - 5;
          val = map(x, 0,100, 0, 255);
          analogWrite(3,val);
          analogWrite(5,val);
          statusLampCh1 = 1;
          statusLampCh2 = 1;
          Serial.print("Lux: ");
          Serial.println(lux);
        }else{
          x = 0;
          val = map(x, 0,100, 0, 255);
          analogWrite(3,val);
          analogWrite(5,val);
          statusLampCh1 = 0;
          statusLampCh2 = 0;
          Serial.print("Lux: ");
          Serial.println(lux);
        }
      } 
    }
    if (caseB == 'c'){
      serialRead = 'a';
      analogWrite(3,0);
      analogWrite(5,0);
      statusLampCh1 = 0;
      statusLampCh2 = 0;
      Serial.println(10);
    }
  }
  if (serialRead == 'c'){
    if(statusLampCh1 == 0){
        analogWrite(3,255);
        statusLampCh1 = 1;
        Serial.println(0);
    }else{
      Serial.println(-2);
    }
    serialRead = 'a';
  }
  if (serialRead == 'd'){
    if(statusLampCh1 == 1){
        analogWrite(3,0);
        statusLampCh1 = 0;
        Serial.println(0);
    }else{
      Serial.println(-2);
    }
    serialRead = 'a';
  }
  if (serialRead == 'e'){
    if(statusLampCh2 == 0){
        analogWrite(5,255);
        statusLampCh2 = 1;
        Serial.println(0);
    }else{
      Serial.println(-2);
    }
    serialRead = 'a';
  }
  if (serialRead == 'f'){
    if(statusLampCh2 == 1){
        analogWrite(5,0);
        statusLampCh2 = 0;
        Serial.println(0);
    }else{
      Serial.println(-2);
    }
    serialRead = 'a';
  }
  delay(500); //INTERVALO DE 5 SEGUNDO
}

//Serial.available - Verifica se tem algo para ler na serial
//Serial.read - Le o que foi escrito na serial
