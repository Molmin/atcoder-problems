Score : $600$ points

## Problem Statement

There are length-$N$ sequences $A=(A_0,A_1,\ldots,A_{N-1})$ and $B=(B_0,B_1,\ldots,B_{N-1})$.<br>
Takahashi may perform the following operation on $A$ any number of times (possibly zero):

- apply a left cyclic shift to the sequence $A$.  In other words, replace $A$ with $A'$ defined by $A'_i=A_{(i+1)\% N}$, where $x\% N$ denotes the remainder when $x$ is divided by $N$.

Takahashi's objective is to maximize $\displaystyle\sum_{i=0}^{N-1} (A_i|B_i)$, where $x|y$ denotes the bitwise logical sum (bitwise OR) of $x$ and $y$.

Find the maximum possible $\displaystyle\sum_{i=0}^{N-1} (A_i|B_i)$.

What is the bitwise logical sum (bitwise OR)?
The **logical sum** (or the OR operation) is an operation on two one-bit integers ($0$ or $1$) defined by the table below.
The **bitwise logical sum (bitwise OR)** is an operation of applying the logical sum bitwise.

 $x$ 
 $y$ 
 $x|y$ 

$0$
$0$
$0$

$0$
$1$
$1$

$1$
$0$
$1$

$1$
$1$
$1$

The logical sum yields $1$ if at least one of the bits $x$ and $y$ is $1$.
Conversely, it yields $0$ only if both of them are $0$.

### Example

```plain
0110 | 0101 = 0111
```

## Constraints

- $2 \leq N \leq 5\times 10^5$
- $0\leq A_i,B_i \leq 31$
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_0$ $A_1$ $\ldots$ $A_{N-1}$
> 
> $B_0$ $B_1$ $\ldots$ $B_{N-1}$

## Output

Print the maximum possible $\displaystyle\sum_{i=0}^{N-1} (A_i|B_i)$.

```input1
3
0 1 3
0 2 3
```

```output1
8
```

If Takahashi does not perform the operation, $A$ remains $(0,1,3)$, and we have $\displaystyle\sum_{i=0}^{N-1} (A_i|B_i)=(0|0)+(1|2)+(3|3)=0+3+3=6$;<br>
if he performs the operation once, making $A=(1,3,0)$, we have $\displaystyle\sum_{i=0}^{N-1} (A_i|B_i)=(1|0)+(3|2)+(0|3)=1+3+3=7$; and<br>
if he performs the operation twice, making $A=(3,0,1)$, we have $\displaystyle\sum_{i=0}^{N-1} (A_i|B_i)=(3|0)+(0|2)+(1|3)=3+2+3=8$.<br>
If he performs the operation three or more times, $A$ becomes one of the sequences above, so the maximum possible $\displaystyle\sum_{i=0}^{N-1} (A_i|B_i)$ is $8$, which should be printed.

```input2
5
1 6 1 4 3
0 6 4 0 1
```

```output2
23
```

The value is maximized if he performs the operation three times, making $A=(4,3,1,6,1)$,<br>
where $\displaystyle\sum_{i=0}^{N-1} (A_i|B_i)=(4|0)+(3|6)+(1|4)+(6|0)+(1|1)=4+7+5+6+1=23$.