#include <TimerOne.h>

int outState = LOW;
unsigned long t=100000;
unsigned int  freq = 0;

void setup() {
  pinMode(2, OUTPUT);
  pinMode(13, OUTPUT);
  Serial.begin(9600);
  Timer1.initialize(t);
  Timer1.attachInterrupt(fuelSender);
}

void loop() {
  if(Serial.available()>0){
      freq = Serial.parseInt();
      Serial.println(freq); 
  }
  t = 500000/freq;
  Timer1.setPeriod(t);
}

void fuelSender(){
  outState = !outState;
  digitalWrite(2,outState);  
  digitalWrite(13,outState); 
}
