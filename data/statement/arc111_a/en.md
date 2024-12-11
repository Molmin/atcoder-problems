Score : $300$ points

## Problem Statement

Given positive integers $N$ and $M$, find the remainder when $\lfloor \frac{10^N}{M} \rfloor$ is divided by $M$.

 What is $\lfloor x \rfloor$? 
$\lfloor x \rfloor$ denotes the greatest integer not exceeding $x$. For example:

- $\lfloor 2.5 \rfloor = 2$
- $\lfloor 3 \rfloor = 3$
- $\lfloor 9.9999999 \rfloor = 9$
- $\lfloor \frac{100}{3} \rfloor = \lfloor 33.33... \rfloor = 33$

## Constraints

- $1 \leq N \leq 10^{18}$
- $1 \leq M \leq 10000$

## Input

Input is given from Standard Input in the following format:

> $N$ $M$

## Output

Print the answer.

```input1
1 2
```

```output1
1
```

We have $\lfloor \frac{10^1}{2} \rfloor = 5$, so we should print the remainder when $5$ is divided by $2$, that is, $1$.

```input2
2 7
```

```output2
0
```

```input3
1000000000000000000 9997
```

```output3
9015
```