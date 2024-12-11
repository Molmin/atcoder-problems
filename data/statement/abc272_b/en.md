Score : $200$ points

## Problem Statement

There are $N$ people numbered $1,2,\ldots,N$.

$M$ parties were held.  $k_i$ people attended the $i$-th $(1\leq i \leq M)$ party, and they were People $x_{i,1},x_{i,2},\ldots,x_{i,k_i}$.

Determine if every two people attended the same party at least once.

## Constraints

- $2\leq N \leq 100$
- $1\leq M \leq 100$
- $2\leq k_i \leq N$
- $1\leq x_{i,1}&lt;x_{i,2}&lt;\ldots &lt; x_{i,k_i}\leq N$
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $k_1$ $x_{1,1}$ $x_{1,2}$ $\ldots$ $x_{1,k_1}$
> 
> $\vdots$
> 
> $k_M$ $x_{M,1}$ $x_{M,2}$ $\ldots$ $x_{M,k_M}$

## Output

Print `Yes` if every two people attended the same party at least once; print `No` otherwise.

```input1
3 3
2 1 2
2 2 3
2 1 3
```

```output1
Yes
```

Both Person $1$ and Person $2$ attended the $1$-st party.

Both Person $2$ and Person $3$ attended the $2$-nd party.

Both Person $1$ and Person $3$ attended the $3$-rd party.

Therefore, every two people attended the same party at least once, so the answer is `Yes`.

```input2
4 2
3 1 2 4
3 2 3 4
```

```output2
No
```

Person $1$ and Person $3$ did not attend the same party, so the answer is `No`.