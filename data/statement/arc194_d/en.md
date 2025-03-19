Score : $700$ points

## Problem Statement

A string is defined to be a **valid parenthesis sequence** if and only if it satisfies one of the following conditions:

- It is an empty string.
- There exists a valid parenthesis sequence $A$ such that the string is obtained by concatenating `(`, $A$, and `)` in this order.
- There exist non-empty valid parenthesis sequences $A$ and $B$ such that the string is obtained by concatenating $A$ and $B$ in this order.

You are given a valid parenthesis sequence $S$ of length $N$. You can perform the following operation any number of times:

- Choose a contiguous substring of $S$ that is a valid parenthesis sequence, and reverse it.

Here, reversing the substring of $S$ from the $l$-th character to the $r$-th character means the following:

- For every integer $i$ satisfying $l \leq i \leq r$, simultaneously replace $S_i$ with `)` if $S_{l+r-i}$ is `(`, and with `(` if $S_{l+r-i}$ is `)`.(Note that reversing here is different from the usual definition of reversing.)

Find the number, modulo $998244353$, of distinct strings $S$ that you can have at the end of the process.

## Constraints

- $1 \leq N \leq 5000$
- $|S| = N$
- $S$ is a valid parenthesis sequence.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $S$

## Output

Print the answer.

```input1
6
(())()
```

```output1
2
```

For example, you can transform $S$ into `()(())` by doing the following:

- Choose the substring from the 1st to the 6th character of $S$. This is a valid parenthesis sequence. $S$ becomes `()(())`.

The only other string that can be formed is `(())()`. Thus, the answer is $2$.

```input2
2
()
```

```output2
1
```