Score : $600$ points

## Problem Statement

There are $N$ balls numbered $1$ through $N$.  Initially, Ball $i$ is painted in Color $A_i$.

Colors are represented by integers between $1$ and $N$, inclusive.

Consider repeating the following operation until all the colors of the balls become the same.

- There are $2^N$ subsets (including the empty set) of the set consisting of the $N$ balls; choose one of the subsets uniformly at random.  Let $X_1,X_2,...,X_K$ be the indices of the chosen balls.  Next, choose a permutation obtained by choosing $K$ integers out of integers $(1,2,\dots,N)$ uniformly at random.  Let $P=(P_1,P_2,\dots,P_K)$ be the chosen permutation.  For each integer $i$ such that $1 \le i \le K$, change the color of Ball $X_i$ to $P_i$.

Find the expected value of number of operations, modulo $998244353$.

Here a permutation obtained by choosing $K$ integers out of integers $(1,2,\dots,N)$
is a sequence of $K$ integers between $1$ and $N$, inclusive, whose elements are pairwise distinct.

## Notes

We can prove that the sought expected value is always a rational number.  Also, under the Constraints of this problem, when the value is represented by two coprime integers $P$ and $Q$ as $\frac{P}{Q}$, we can prove that there exists a unique integer $R$ such that $R \times Q \equiv P(\bmod\ 998244353)$ and $0 \le R &lt; 998244353$.  Find this $R$.

## Constraints

- $2 \le N \le 2000$
- $1 \le A_i \le N$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\dots$ $A_N$

## Output

Print the answer.

```input1
2
1 2
```

```output1
4
```

The operation is repeated until a subset of size $1$ is chosen and the color of the ball is changed to the color of the ball not contained in the subset.  The probability is $\displaystyle \frac{2}{4} \times \frac{1}{2}=\frac{1}{4}$, so the expected value is $4$.

```input2
3
1 1 1
```

```output2
0
```

The operation is never performed, since the colors of the balls are already the same.

```input3
10
3 1 4 1 5 9 2 6 5 3
```

```output3
900221128
```