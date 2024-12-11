Score : $100$ points

## Problem Statement

You are given a three-digit integer $N$ where each digit is an integer between $1$ and $9$, inclusive.

Let $a$, $b$, $c$ be the hundreds, tens, ones digits of $N$, respectively. Print an integer formed by arranging $b$, $c$, $a$ in this order, and an integer formed by arranging $c$, $a$, $b$ in this order.

## Constraints

- $N$ is a three-digit integer where each digit is an integer between $1$ and $9$, inclusive.

## Input

The input is given from Standard Input in the following format:

> $N$

## Output

Print two integers separated by a space in the following order: an integer formed by arranging $b$, $c$, $a$ in this order, and an integer formed by arranging $c$, $a$, $b$ in this order.

```input1
379
```

```output1
793 937
```

The hundreds, tens, ones digits of $379$ are $3$, $7$, $9$, respectively, so print $793$ and $937$.

```input2
919
```

```output2
199 991
```

The hundreds, tens, ones digits of $919$ are $9$, $1$, $9$, respectively, so print $199$ and $991$.