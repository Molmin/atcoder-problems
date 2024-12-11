Score : $100$ points

## Problem Statement

Given integers $R$, $C$, and a $2 \times 2$ matrix $A$, print $A_{R,C}$.

## Constraints

- All values in input are integers.
- $1 \le R,C \le 2$
- $0 \le A_{i,j} \le 100$

## Input

Input is given from Standard Input in the following format:

> $R$ $C$
> 
> $A_{1,1}$ $A_{1,2}$
> 
> $A_{2,1}$ $A_{2,2}$

## Output

Print the answer as an integer.

```input1
1 2
1 0
0 1
```

```output1
0
```

We have $A_{1,2}=0$.

```input2
2 2
1 2
3 4
```

```output2
4
```

We have $A_{2,2}=4$.

```input3
2 1
90 80
70 60
```

```output3
70
```

We have $A_{2,1}=70$.