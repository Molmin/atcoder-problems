Score : $400$ points

## Problem Statement

There is a sequence $A=(A_0,\ldots,A_{N-1})$ of length $N$.<br>
Determine if there exists a tuple of integers $(x,y,z,w)$ that satisfies all of the following conditions:

- $0 \leq x &lt; y &lt; z &lt; w \leq N$
- $A_x + A_{x+1} + \ldots + A_{y-1} = P$
- $A_y + A_{y+1} + \ldots + A_{z-1} = Q$
- $A_z + A_{z+1} + \ldots + A_{w-1} = R$

## Constraints

- $3 \leq N \leq 2\times 10^5$
- $1 \leq A_i \leq 10^9$
- $1 \leq P,Q,R \leq 10^{15}$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $P$ $Q$ $R$
> 
> $A_0$ $A_1$ $\ldots$ $A_{N-1}$

## Output

If there exists a tuple that satisfies the conditions, print `Yes`; otherwise, print `No`.  

```input1
10 5 7 5
1 3 2 2 2 3 1 4 3 2
```

```output1
Yes
```

$(x,y,z,w)=(1,3,6,8)$ satisfies the conditions.

```input2
9 100 101 100
31 41 59 26 53 58 97 93 23
```

```output2
No
```

```input3
7 1 1 1
1 1 1 1 1 1 1
```

```output3
Yes
```