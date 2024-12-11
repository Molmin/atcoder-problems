Score : $200$ points

## Problem Statement

The Republic of AtCoder has $N$ mountains. The $i$-th mountain has a name $S_i$ and a height of $T_i$.

Return the name of the second highest mountain there. It is guaranteed that all the mountains have different names and different heights.

## Constraints

- $2 \leq N \leq 1000$
- $1 \leq ({}$the length of $S_i) \leq 15$
- $1 \leq T_i \leq 10^5$
- $S_i \neq S_j \ (i \neq j)$
- $T_i \neq T_j \ (i \neq j)$
- $S_i$ consists of uppercase English letters, lowercase English letters, and digits.
- $N$ and $T_i$ are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $S_1$ $T_1$
> 
> $S_2$ $T_2$
> 
> $\vdots$
> 
> $S_N$ $T_N$

## Output

Print the name of the second highest mountain.

```input1
3
Everest 8849
K2 8611
Kangchenjunga 8586
```

```output1
K2
```

The second highest mountain in the world is K2.

```input2
4
Kita 3193
Aino 3189
Fuji 3776
Okuhotaka 3190
```

```output2
Kita
```

The second highest mountain in Japan is Kita-dake.

```input3
4
QCFium 2846
chokudai 2992
kyoprofriends 2432
penguinman 2390
```

```output3
QCFium
```