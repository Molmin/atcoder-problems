Score : $600$ points

## Problem Statement

Given are an integer $N$ and four characters $c_{\mathrm{AA}}$, $c_{\mathrm{AB}}$, $c_{\mathrm{BA}}$, and $c_{\mathrm{BB}}$.
Here, it is guaranteed that each of those four characters is `A` or `B`.

Snuke has a string $s$, which is initially `AB`.

Let $|s|$ denote the length of $s$.
Snuke can do the four kinds of operations below zero or more times in any order:

1. Choose $i$ such that $1 \leq i &lt; |s|$, $s_{i}$ = `A`, $s_{i+1}$ = `A` and insert $c_{\mathrm{AA}}$ between the $i$-th and $(i+1)$-th characters of $s$.
2. Choose $i$ such that $1 \leq i &lt; |s|$, $s_{i}$ = `A`, $s_{i+1}$ = `B` and insert $c_{\mathrm{AB}}$ between the $i$-th and $(i+1)$-th characters of $s$.
3. Choose $i$ such that $1 \leq i &lt; |s|$, $s_{i}$ = `B`, $s_{i+1}$ = `A` and insert $c_{\mathrm{BA}}$ between the $i$-th and $(i+1)$-th characters of $s$.
4. Choose $i$ such that $1 \leq i &lt; |s|$, $s_{i}$ = `B`, $s_{i+1}$ = `B` and insert $c_{\mathrm{BB}}$ between the $i$-th and $(i+1)$-th characters of $s$.

Find the number, modulo $(10^9+7)$, of strings that can be $s$ when Snuke has done the operations so that the length of $s$ becomes $N$.

## Constraints

- $2 \leq N \leq 1000$
- Each of $c_{\mathrm{AA}}$, $c_{\mathrm{AB}}$, $c_{\mathrm{BA}}$, and $c_{\mathrm{BB}}$ is `A` or `B`.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $c_{\mathrm{AA}}$
> 
> $c_{\mathrm{AB}}$
> 
> $c_{\mathrm{BA}}$
> 
> $c_{\mathrm{BB}}$

## Output

Print the number, modulo $(10^9+7)$, of strings that can be $s$ when Snuke has done the operations so that the length of $s$ becomes $N$.

```input1
4
A
B
B
A
```

```output1
2
```

- There are two strings that can be $s$ when Snuke is done: `ABAB` and `ABBB`.

```input2
1000
B
B
B
B
```

```output2
1
```

- There is just one string that can be $s$ when Snuke is done.