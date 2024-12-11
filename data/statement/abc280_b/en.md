Score : $200$ points

## Problem Statement

You are given an integer $N$ and a sequence $S=(S_1,\ldots,S_N)$ of length $N$.

Find a sequence $A=(A_1,\ldots,A_N)$ of length $N$ that satisfies the following condition for all $k=1,\ldots,N$:

- $A_1+A_2+\ldots+A_k = S_k$.

Such a sequence $A$ always exists and is unique.

## Constraints

- $1 \leq N \leq 10$
- $-10^9\leq S_i \leq 10^9$
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $S_1$ $\ldots$ $S_N$

## Output

Print the elements of a sequence $A=(A_1,\ldots,A_N)$ that satisfies all the conditions in order, separated by spaces.  

```input1
3
3 4 8
```

```output1
3 1 4
```

The sequence in the output actually satisfies all the conditions:

- $A_1=3=S_1$;
- $A_1+A_2=3+1=4=S_2$;
- $A_1+A_2+A_3=3+1+4=8=S_3$.

```input2
10
314159265 358979323 846264338 -327950288 419716939 -937510582 97494459 230781640 628620899 -862803482
```

```output2
314159265 44820058 487285015 -1174214626 747667227 -1357227521 1035005041 133287181 397839259 -1491424381
```