Score : $500$ points

## Problem Statement

Takahashi has a secret integer sequence $a$. You know that the length of $a$ is $N$.

You want to guess the contents of $a$. He has promised to give you the following $Q$ additional pieces of information.

- The $i$-th information: the value $a_{l_i}+a_{l_i+1}+\cdots+a_{r_i}$.

Is it possible to determine the sum of all elements in $a$, $a_1+a_2+\cdots+a_N$, if the $Q$ pieces of promised information are given?

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $1 \leq Q \leq \min(2 \times 10^5,\frac{N(N+1)}{2})$
- $1 \leq l_i \leq r_i \leq N$
- $(l_i,r_i) \neq (l_j,r_j)\ (i \neq j)$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $Q$
> 
> $l_1$ $r_1$
> 
> $l_2$ $r_2$
> 
> $\hspace{0.4cm}\vdots$
> 
> $l_Q$ $r_Q$

## Output

If it is possible to determine the sum of all elements in $a$, print `Yes`; otherwise, print `No`.

```input1
3 3
1 2
2 3
2 2
```

```output1
Yes
```

From the first and second information, we can find the value $a_1+a_2+a_2+a_3$. By subtracting the value of $a_2$ from it, we can determine the value $a_1+a_2+a_3$.

```input2
4 3
1 3
1 2
2 3
```

```output2
No
```

We can determine the sum of the first $3$ elements of $a$, but not the sum of all elements.

```input3
4 4
1 1
2 2
3 3
1 4
```

```output3
Yes
```

The fourth information directly gives us the sum of all elements.