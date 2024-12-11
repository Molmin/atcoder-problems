Score : $200$ points

## Problem Statement

Akaki, a patissier, can make $N$ kinds of doughnut using only a certain powder called "Okashi no Moto" (literally "material of pastry", simply called Moto below) as ingredient. These doughnuts are called Doughnut $1$, Doughnut $2$, $...,$ Doughnut $N$. In order to make one Doughnut $i$ $(1 \leq i \leq N)$, she needs to consume $m_i$ grams of Moto. She cannot make a non-integer number of doughnuts, such as $0.5$ doughnuts.

Now, she has $X$ grams of Moto. She decides to make as many doughnuts as possible for a party tonight. However, since the tastes of the guests differ, she will obey the following condition:

- For each of the $N$ kinds of doughnuts, make at least one doughnut of that kind.

At most how many doughnuts can be made here? She does not necessarily need to consume all of her Moto. Also, under the constraints of this problem, it is always possible to obey the condition.

## Constraints

- $2 \leq N \leq 100$
- $1 \leq m_i \leq 1000$
- $m_1 + m_2 + ... + m_N \leq X \leq 10^5$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $X$
> 
> $m_1$
> 
> $m_2$
> 
> $:$
> 
> $m_N$

## Output

Print the maximum number of doughnuts that can be made under the condition.

```input1
3 1000
120
100
140
```

```output1
9
```

She has $1000$ grams of Moto and can make three kinds of doughnuts. If she makes one doughnut for each of the three kinds, she consumes $120 + 100 + 140 = 360$ grams of Moto. From the $640$ grams of Moto that remains here, she can make additional six Doughnuts $2$. This is how she can made a total of nine doughnuts, which is the maximum.

```input2
4 360
90
90
90
90
```

```output2
4
```

Making one doughnut for each of the four kinds consumes all of her Moto.

```input3
5 3000
150
130
150
130
110
```

```output3
26
```