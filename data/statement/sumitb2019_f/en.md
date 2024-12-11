Score: $600$ points

## Problem Statement

Takahashi and Aoki are training for long-distance races in an infinitely long straight course running from west to east.

They start simultaneously at the same point and moves as follows **towards the east**:

- Takahashi runs $A_1$ meters per minute for the first $T_1$ minutes,  then runs at $A_2$ meters per minute for the subsequent $T_2$ minutes, and alternates between these two modes forever.
- Aoki runs $B_1$ meters per minute for the first $T_1$ minutes,  then runs at $B_2$ meters per minute for the subsequent $T_2$ minutes, and alternates between these two modes forever.

How many times will Takahashi and Aoki meet each other, that is, come to the same point? We do not count the start of the run. If they meet infinitely many times, report that fact.

## Constraints

- $1 \leq T_i \leq 100000$
- $1 \leq A_i \leq 10^{10}$
- $1 \leq B_i \leq 10^{10}$
- $A_1 \neq B_1$
- $A_2 \neq B_2$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $T_1$ $T_2$
> 
> $A_1$ $A_2$
> 
> $B_1$ $B_2$

## Output

Print the number of times Takahashi and Aoki will meet each other.<br>
If they meet infinitely many times, print `infinity` instead.  

```input1
1 2
10 10
12 4
```

```output1
1
```

They will meet just once, $\frac{4}{3}$ minutes after they start, at $\frac{40}{3}$ meters from where they start.

```input2
100 1
101 101
102 1
```

```output2
infinity
```

They will meet $101, 202, 303, 404, 505, 606, ...$ minutes after they start, that is, they will meet infinitely many times.

```input3
12000 15700
3390000000 3810000000
5550000000 2130000000
```

```output3
113
```

The values in input may not fit into a $32$-bit integer type.