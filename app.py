def divisores_primos(n):
  divisores = []
  for i in range(2,n):
    while n % i == 0:
      divisores.append(i)
      n /= i

  return divisores

  
   