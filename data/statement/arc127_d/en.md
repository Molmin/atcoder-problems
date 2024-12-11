Score : $700$ points

## Problem Statement

Given are sequences of $N$ integers each: $(A_1,A_2,\cdots,A_N)$ and $(B_1,B_2,\cdots,B_N)$.

Find $\sum_{1 \leq i &lt; j \leq N} \min(A_i \oplus A_j, B_i \oplus B_j)$, where $\oplus$ denotes the bitwise XOR.

## Constraints

- $1 \leq N \leq 250000$
- $0 \leq A_i,B_i &lt; 2^{18}$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\cdots$ $A_N$
> 
> $B_1$ $B_2$ $\cdots$ $B_N$

## Output

Print the answer.

```input1
3
1 2 3
4 5 6
```

```output1
4
```

- $\min(1 \oplus 2, 4 \oplus 5)=\min(3,1)=1$
- $\min(1 \oplus 3, 4 \oplus 6)=\min(2,2)=2$
- $\min(2 \oplus 3, 5 \oplus 6)=\min(1,3)=1$

Thus, the answer is $1+2+1=4$.

```input2
4
1 2 3 4
1 2 3 4
```

```output2
24
```

```input3
10
195247 210567 149398 9678 23694 46151 187762 17915 176476 249828
68649 128425 249346 62366 194119 117620 26327 161384 207 57656
```

```output3
4019496
```