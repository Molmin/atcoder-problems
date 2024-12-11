Score : $900$ points

## Problem Statement

Akaki, a patissier, can make $N$ kinds of doughnut using only a certain powder called "Okashi no Moto" (literally "material of pastry", simply called Moto below) as ingredient. These doughnuts are called Doughnut $1$, Doughnut $2$, $...,$ Doughnut $N$. In order to make one Doughnut $i$ $(1 \leq i \leq N)$, she needs to consume $m_i$ grams of Moto. She cannot make a non-integer number of doughnuts, such as $0.5$ doughnuts.

The recipes of these doughnuts are developed by repeated modifications from the recipe of Doughnut $1$. Specifically, the recipe of Doughnut $i$ $(2 \leq i \leq N)$ is a direct modification of the recipe of Doughnut $p_i$ $(1 \leq p_i &lt; i)$.

Now, she has $X$ grams of Moto. She decides to make as many doughnuts as possible for a party tonight. However, since the tastes of the guests differ, she will obey the following condition:

- Let $c_i$ be the number of Doughnut $i$ $(1 \leq i \leq N)$ that she makes. For each integer $i$ such that $2 \leq i \leq N$, $c_{p_i} \leq c_i \leq c_{p_i} + D$ must hold. Here, $D$ is a predetermined value.

At most how many doughnuts can be made here? She does not necessarily need to consume all of her Moto.

## Constraints

- $2 \leq N \leq 50$
- $1 \leq X \leq 10^9$
- $0 \leq D \leq 10^9$
- $1 \leq m_i \leq 10^9$ $(1 \leq i \leq N)$
- $1 \leq p_i &lt; i$ $(2 \leq i \leq N)$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $X$ $D$
> 
> $m_1$
> 
> $m_2$ $p_2$
> 
> $:$
> 
> $m_N$ $p_N$

## Output

Print the maximum number of doughnuts that can be made under the condition.

```input1
3 100 1
15
10 1
20 1
```

```output1
7
```

She has $100$ grams of Moto, can make three kinds of doughnuts, and the conditions that must hold are $c_1 \leq c_2 \leq c_1 + 1$ and $c_1 \leq c_3 \leq c_1 + 1$. It is optimal to make two Doughnuts $1$, three Doughnuts $2$ and two Doughnuts $3$.

```input2
3 100 10
15
10 1
20 1
```

```output2
10
```

The amount of Moto and the recipes of the doughnuts are not changed from Sample Input 1, but the last conditions are relaxed. In this case, it is optimal to make just ten Doughnuts $2$. As seen here, she does not necessarily need to make all kinds of doughnuts.

```input3
5 1000000000 1000000
123
159 1
111 1
135 3
147 3
```

```output3
7496296
```