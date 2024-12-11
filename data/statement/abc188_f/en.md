Score : $600$ points

## Problem Statement

Takahashi has written an integer $X$ on a blackboard.
He can do the following three kinds of operations any number of times in any order:

- increase the value written on the blackboard by $1$;
- decrease the value written on the blackboard by $1$;
- multiply the value written on the blackboard by $2$.

Find the minimum number of operations required to have $Y$ written on the blackboard.

## Constraints

- $1 \le X \le 10^{18}$
- $1 \le Y \le 10^{18}$
- $X$ and $Y$ are integers.

## Input

Input is given from Standard Input in the following format:

> $X$ $Y$

## Output

Print the answer.

```input1
3 9
```

```output1
3
```

Initially, $3$ is written on the blackboard. The following three operations can make it $9$:

- increase the value by $1$, which results in $4$;
- multiply the value by $2$, which results in $8$;
- increase the value by $1$, which results in $9$.

```input2
7 11
```

```output2
3
```

The following procedure can make the value on the blackboard $11$:

- decrease the value by $1$, which results in $6$;
- multiply the value by $2$, which results in $12$;
- decrease the value by $1$, which results in $11$.

```input3
1000000000000000000 1000000000000000000
```

```output3
0
```

If the value initially written on the blackboard equals $Y$, print $0$.