Score : $1200$ points

## Problem Statement

In Republic of AtCoder, Snuke Chameleons (Family: Chamaeleonidae, Genus: Bartaberia) are very popular pets.
Ringo keeps $N$ Snuke Chameleons in a cage.

A Snuke Chameleon that has not eaten anything is blue. It changes its color according to the following rules:

- A Snuke Chameleon that is blue will change its color to red when the number of red balls it has eaten becomes strictly larger than the number of blue balls it has eaten.
- A Snuke Chameleon that is red will change its color to blue when the number of blue balls it has eaten becomes strictly larger than the number of red balls it has eaten.

Initially, every Snuke Chameleon had not eaten anything. Ringo fed them by repeating the following process $K$ times:

- Grab either a red ball or a blue ball.
- Throw that ball into the cage. Then, one of the chameleons eats it.

After Ringo threw in $K$ balls, all the chameleons were red. We are interested in the possible ways Ringo could have thrown in $K$ balls. How many such ways are there? Find the count modulo $998244353$. Here, two ways to throw in balls are considered different when there exists $i$ such that the color of the ball that are thrown in the $i$-th throw is different.

## Constraints

- $1 \leq N,K \leq 5 \times 10^5$
- $N$ and $K$ are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $K$

## Output

Print the possible ways Ringo could have thrown in $K$ balls, modulo $998244353$.

```input1
2 4
```

```output1
7
```

We will use `R` to represent a red ball, and `B` to represent a blue ball. There are seven ways to throw in balls that satisfy the condition: `BRRR`, `RBRB`, `RBRR`, `RRBB`, `RRBR`, `RRRB` and `RRRR`.

```input2
3 7
```

```output2
57
```

```input3
8 3
```

```output3
0
```

```input4
8 10
```

```output4
46
```

```input5
123456 234567
```

```output5
857617983
```