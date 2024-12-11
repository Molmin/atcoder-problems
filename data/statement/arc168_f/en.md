Score : $1100$ points

## Problem Statement

For an integer sequence $x=(x_1,x_2,\cdots,x_N)$ of length $N$ with each element being between $0$ and $M$, inclusive, we define $f(x)$ as follows:

- Prepare an integer sequence $y=(y_1,y_2,\cdots,y_M)$ of length $M$.
Initially, set all elements of $y$ to $0$.
Then, for each $i=1,2,\cdots,N$, in order, perform the following operations:-   - For each integer $j$ ($1 \leq j \leq x_i$), replace the value of $y_j$ with $\max(y_j-1,0)$.
-   - For each integer $j$ ($x_i &amp;lt; j \leq M$), replace the value of $y_j$ with $y_j+1$.
- The sum of the elements of $y$ after all operations is the value of $f(x)$.

You are given an integer sequence $A=(A_1,A_2,\cdots,A_N)$ of length $N$ with each element being between $0$ and $M$, inclusive.
Process $Q$ queries:

- The $i$-th query: Given integers $X_i$ and $Y_i$, replace the value of $A_{X_i}$ with $Y_i$.
Then, print the value of $f(A)$.

## Constraints

- $1 \leq N,M,Q \leq 250000$
- $0 \leq A_i \leq M$
- $1 \leq X_i \leq N$
- $0 \leq Y_i \leq M$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$ $Q$
> 
> $A_1$ $A_2$ $\cdots$ $A_N$
> 
> $X_1$ $Y_1$
> 
> $X_2$ $Y_2$
> 
> $\vdots$
> 
> $X_Q$ $Y_Q$

## Output

Print the answer.

```input1
3 4 2
1 2 3
1 4
3 0
```

```output1
2
6
```

Consider the first query.
We replace the value of $A_1$ with $4$, making $A=(4,2,3)$.
Then, the value of $f(A)$ is calculated as follows:

- Prepare $y=(0,0,0,0)$.
- Perform the operation for $A_1=4$, resulting in $y=(0,0,0,0)$.
- Perform the operation for $A_2=2$, resulting in $y=(0,0,1,1)$.
- Perform the operation for $A_3=3$, resulting in $y=(0,0,0,2)$.
- The sum of the elements of $y$, which equals $2$, is the value of $f(A)$.

Next, consider the second query.
We replace the value of $A_3$ with $0$, making $A=(4,2,0)$.
Then, the value of $f(A)$ is calculated as follows:

- Prepare $y=(0,0,0,0)$.
- Perform the operation for $A_1=4$, resulting in $y=(0,0,0,0)$.
- Perform the operation for $A_2=2$, resulting in $y=(0,0,1,1)$.
- Perform the operation for $A_3=0$, resulting in $y=(1,1,2,2)$.
- The sum of the elements of $y$, which equals $6$, is the value of $f(A)$.

```input2
7 2 9
2 0 2 2 0 1 0
1 1
3 0
4 0
4 1
6 1
3 2
2 0
3 2
2 0
```

```output2
4
7
11
9
9
6
6
6
6
```

```input3
20 200000 10
39664 143179 193565 153887 16141 91985 51452 155409 116777 190060 87620 64458 106481 51272 9108 100995 139248 18243 181424 6182
4 196305
13 59753
8 96194
6 57037
19 125781
16 142779
15 13967
10 17772
16 84763
12 17283
```

```output3
1145670
1234421
1352851
1352851
1464137
1380569
1380569
1608611
1724643
1736769
```