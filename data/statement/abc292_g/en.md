Score : $600$ points

## Problem Statement

You are given a sequence $S_1,\ldots,S_N$ of length-$M$ strings consisting of digits (`0123456789`) and `?`.

There are $10^q$ ways to replace the occurrences of `?` with digits independently, where $q$ is the total number of `?` in $S_1,\ldots,S_N$. Among them, how many satisfy $S_1\lt S_2 \lt \ldots \lt S_N$ when the resulting strings are seen as integers? Find this count modulo $998244353$.

The resulting strings may have leading zeros. For instance, `0000000292` is seen as $292$.

## Constraints

- $2 \leq N \leq 40$
- $1 \leq M \leq 40$
- $N$ and $M$ are integers.
- $S_i$ is a string of length $M$ consisting of digits and `?`.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $S_1$
> 
> $\vdots$
> 
> $S_N$

## Output

Print the answer.

```input1
3 2
?0
??
05
```

```output1
4
```

Here are the four desired replacements.

- Replace the first character of $S_1$ with `0`, and the first and second characters of $S_2$ with `0` and `1`, respectively.
- Replace the first character of $S_1$ with `0`, and the first and second characters of $S_2$ with `0` and `2`, respectively.
- Replace the first character of $S_1$ with `0`, and the first and second characters of $S_2$ with `0` and `3`, respectively.
- Replace the first character of $S_1$ with `0`, and the first and second characters of $S_2$ with `0` and `4`, respectively.

```input2
2 1
0
0
```

```output2
0
```

```input3
10 10
1?22??37?4
1??8?0??49
3?02??8044
51?4?8?7??
5?9?20???2
68?7?6?800
?3??2???23
?442312158
??2??921?8
????5?96??
```

```output3
137811792
```

Find the count modulo $998244353$.