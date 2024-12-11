Score: $300$ points

## Problem Statement

In problems on AtCoder, you are often asked to:

find the answer modulo $998244353$.

Here, we have $998244353 = 119 \times 2^{23} + 1$. Related to this, solve the following prolem:

You are given an integer $N$.<br>
Print the minimum possible value of $a + b + c$ for a triple of non-negative integers $(a, b, c)$ satisfying $N = a \times 2^b + c$.

## Constraints

- $1 \leq N \leq 10^{18}$
- $N$ is an integer.

## Input

Input is given from Standard Input in the following format:

> $N$

## Output

Print the answer.

```input1
998244353
```

```output1
143
```

We have $998244353 = 119 \times 2^{23} + 1$, in other words, the triple $(a, b, c) = (119, 23, 1)$ satisfies $N = a \times 2^{b} + c$.<br>
The value $a+b+c$ for this triple is $143$.<br>
There is no such triple where $a+b+c \leq 142$, so $143$ is the correct output.  

```input2
1000000007
```

```output2
49483
```

We have $1000000007 = 30517 \times 2^{15} + 18951$, in other words, the triple $(a, b, c) = (30517, 15, 18951)$ satisfies $N = a \times 2^{b} + c$.<br>
The value $a+b+c$ for this triple is $49483$.<br>
There is no such triple where $a+b+c \leq 49482$, so $49483$ is the correct output.  

```input3
1
```

```output3
1
```

Note that we have $2^0 = 1$.

```input4
998984374864432412
```

```output4
2003450165
```