Score : $625$ points

## Problem Statement

There are $N$ cards in a box. Each card has an integer written on it, which is between $1$ and $M$, inclusive. For each $i=1,\ldots,M$, there are $C_i$ cards with the number $i$ written on them.

Starting with an empty notebook, you repeat the following operation:

- Randomly draw one card from the box. Write the integer on the card in the notebook, then return the card to the box.

Find the expected value, modulo $998244353$, of the number of times the operation is performed until the notebook has all integers from $1$ to $M$ written at least once.

How to find an expected value modulo $998244353$

The expected value sought in this problem can be proven to always be a rational number. Furthermore, the constraints of this problem guarantee that when the expected value is expressed as an irreducible fraction $\frac yx$, the denominator $x$ is not divisible by $998244353$.

Then, there is a unique $0\leq z\lt998244353$ such that $y\equiv xz\pmod{998244353}$. Print this $z$.

## Constraints

- $1 \leq M \leq N \leq 2\times 10^5$
- $1 \leq C_i$
- $\sum_{i=1}^{M}C_i=N$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $C_1$ $\ldots$ $C_M$

## Output

Print the answer.

```input1
2 2
1 1
```

```output1
3
```

The series of operations may proceed as follows:

- You draw a card with $1$ written on it. The notebook now has one $1$ written in it.
- You again draw a card with $1$ written on it. The notebook now has two $1$s written in it.
- You draw a card with $2$ written on it. The notebook now has two $1$s and one $2$ written in it.

The sought expected value is $2\times\frac{1}{2}+3\times\frac{1}{4}+4\times\frac{1}{8}+\ldots=3$.

```input2
5 2
4 1
```

```output2
748683270
```

The expected value is $\frac{21}{4}$, whose representation modulo $998244353$ is $748683270$.

```input3
50 50
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
```

```output3
244742906
```

The expected value is $\frac{13943237577224054960759}{61980890084919934128}$.

```input4
74070 15
1 2 3 11 22 33 111 222 333 1111 2222 3333 11111 22222 33333
```

```output4
918012973
```