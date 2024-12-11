Score : $550$ points

## Problem Statement

There are $N$ people standing in a line, with person $i$ standing at the $i$-th position from the front.

Repeat the following operation until there is only one person left in the line:

- Remove the person at the front of the line with a probability of $\frac{1}{2}$, otherwise move them to the end of the line.

For each person $i=1,2,\ldots,N$, find the probability that person $i$ is the last person remaining in the line, modulo $998244353$. (All choices to remove or not are random and independent.)

 How to find probabilities modulo $998244353$

The probabilities sought in this problem can be proven to always be a rational number. Furthermore, the constraints of this problem guarantee that if the sought probability is expressed as an irreducible fraction $\frac{y}{x}$, then $x$ is not divisible by $998244353$.

 

Now, there is a unique integer $z$ between $0$ and $998244352$, inclusive, such that $xz \equiv y \pmod{998244353}$. Report this $z$.

 

## Constraints

- $2\leq N\leq 3000$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$

## Output

Print the answer for people $i=1,2,\ldots,N$, separated by spaces.

```input1
2
```

```output1
332748118 665496236
```

Person $1$ will be the last person remaining in the line with probability $\frac{1}{3}$.

Person $2$ will be the last person remaining in the line with probability $\frac{2}{3}$.

```input2
5
```

```output2
235530465 792768557 258531487 238597268 471060930
```