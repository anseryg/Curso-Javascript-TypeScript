function recursiva(max) {
  console.log(max);
  if (max >= 10) return;
  max++;
  recursiva(max);  // A função se chama toda vez que é executada
}

recursiva(0);
