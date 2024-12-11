Score : $500$ points

## Problem Statement

For a string $T$ of length $L$ consisting of `d` and `p`, let $f(T)$ be $T$ rotated $180$ degrees. More formally, let $f(T)$ be the string that satisfies the following conditions.

- $f(T)$ is a string of length $L$ consisting of `d` and `p`.
- For every integer $i$ such that $1 \leq i \leq L$, the $i$-th character of $f(T)$ differs from the $(L + 1 - i)$-th character of $T$.

For instance, if $T =$ `ddddd`, $f(T) =$ `ppppp`; if $T =$ `dpdppp`, $f(T)=$ `dddpdp`. 

You are given a string $S$ of length $N$ consisting of `d` and `p`.<br>
You may perform the following operation **zero or one** time.

- Choose a pair of integers $(L, R)$ such that $1 \leq L \leq R \leq N$, and let $T$ be the substring formed by the $L$-th through $R$-th characters of $S$. Then, replace the $L$-th through $R$-th characters of $S$ with $f(T)$.

For instance, if $S=$ `dpdpp` and $(L,R)=(2,4)$, we have $T=$ `pdp` and $f(T)=$ `dpd`, so $S$ becomes `ddpdp`.

Print the lexicographically smallest string that $S$ can become.

What is lexicographical order?

A string $S = S_1S_2\ldots S_{|S|}$ is said to be **lexicographically smaller** than a string $T = T_1T_2\ldots T_{|T|}$ if one of the following 1. and 2. holds.
Here, $|S|$ and $|T|$ denote the lengths of $S$ and $T$, respectively.

1. $|S| \lt |T|$ and $S_1S_2\ldots S_{|S|} = T_1T_2\ldots T_{|S|}$.
2. There is an integer $1 \leq i \leq \min\lbrace |S|, |T| \rbrace$ that satisfies the following two conditions:
1.    - $S_1S_2\ldots S_{i-1} = T_1T_2\ldots T_{i-1}$.
2.    - $S_i$ is smaller than $T_i$ in alphabetical order.

## Constraints

- $1 \leq N \leq 5000$
- $S$ is a string of length $N$ consisting of `d` and `p`.
- $N$ is an integer.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $S$

## Output

Print the answer.

```input1
6
dpdppd
```

```output1
dddpdd
```

Let $(L, R) = (2, 5)$. Then, we have $T =$ `pdpp` and $f(T) =$ `ddpd`, so $S$ becomes `dddpdd`.<br>
This is the lexicographically smallest string that can be obtained, so print it.

```input2
3
ddd
```

```output2
ddd
```

It may be optimal to skip the operation. 

```input3
11
ddpdpdppddp
```

```output3
ddddpdpdddp
```