Score : $600$ points

## Problem Statement

There are $N$ chairs arranged in a row, called Chair $1$, Chair $2$, $\ldots$, Chair $N$.<br>
A chair seats only one person.

$M$ people will sit on $M$ of these chairs. Here, let us define the score as follows:

$\displaystyle \prod_{i=1}^{M-1} (B_{i+1} - B_i)$, where $B=(B_1,B_2,\ldots,B_M)$ is the sorted list of the indices of the chairs the people sit on.

Person $i$ $(1 \leq i \leq K)$ is already sitting on Chair $A_i$.<br>
There are ${} _ {N-K} \mathrm{P} _ {M-K}$ ways for the other $M-K$ people to take seats. Find the sum of the scores for all of these ways.

Since this sum may be enormous, compute it modulo $998244353$.

## Constraints

- $2 \leq N \leq 2 \times 10^5$
- $2 \leq M \leq N$
- $0 \leq K \leq M$
- $1 \leq A_1 \lt A_2 \lt \ldots \lt A_K \leq N$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$ $K$
> 
> $A_1$ $A_2$ $\ldots$ $A_K$

## Output

Print the answer.

```input1
5 3 2
1 3
```

```output1
7
```

If Person $3$ sits on Chair $2$, the score will be $(2-1) \times (3-2)=1 \times 1 = 1$.<br>
If Person $3$ sits on Chair $4$, the score will be $(3-1) \times (4-3)=2 \times 1 = 2$.<br>
If Person $3$ sits on Chair $5$, the score will be $(3-1) \times (5-3)=2 \times 2 = 4$.<br>
The answer is $1+2+4=7$.

```input2
6 6 1
4
```

```output2
120
```

The score for every way of sitting will be $1$.<br>
There are ${} _ {5} \mathrm{P} _ {5} = 120$ ways of sitting, so the answer is $120$.

```input3
99 10 3
10 50 90
```

```output3
761621047
```