Score : $800$ points

## Problem Statement

We have a sequence of $N$ positive integers: $A_1,A_2,\cdots,A_N$.
You are to rearrange these integers into another sequence $x_1,x_2,\cdots,x_N$, where $x$ must satisfy the following condition:

- Let us define $y_i=\operatorname{LCM}(x_1,x_2,\cdots,x_i)$, where the function $\operatorname{LCM}$ returns the least common multiple of the given integers. Then, $y$ is strictly increasing. In other words, $y_1&lt;y_2&lt;\cdots&lt;y_N$ holds.

Determine whether it is possible to form a sequence $x$ satisfying the condition, and show one such sequence if it is possible.

## Constraints

- $1 \leq N \leq 100$
- $2 \leq A_1 &lt; A_2 \cdots &lt; A_N \leq 10^{18}$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\cdots$ $A_N$

## Output

If it is possible to form a sequence $x$ satisfying the condition, print your answer in the following format:

> Yes
> 
> $x_1$ $x_2$ $\cdots$ $x_N$

If it is impossible, print `No`.

```input1
3
3 4 6
```

```output1
Yes
3 6 4
```

For $x=(3,6,4)$, we have:

- $y_1=\operatorname{LCM}(3)=3$
- $y_2=\operatorname{LCM}(3,6)=6$
- $y_3=\operatorname{LCM}(3,6,4)=12$

Here, $y_1&lt;y_2&lt;y_3$ holds.

```input2
3
2 3 6
```

```output2
No
```

No permutation of $A$ would satisfy the condition.

```input3
10
922513 346046618969 3247317977078471 4638516664311857 18332844097865861 81706734998806133 116282391418772039 134115264093375553 156087536381939527 255595307440611247
```

```output3
Yes
922513 346046618969 116282391418772039 81706734998806133 255595307440611247 156087536381939527 134115264093375553 18332844097865861 3247317977078471 4638516664311857
```