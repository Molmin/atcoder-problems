Score : $100$ points

## Problem Statement

You are given integers $A$, $B$, and $C$.<br>
Determine whether $A^2 + B^2 &lt; C^2$ holds.  

## Constraints

- $0 \le A \le 1000$
- $0 \le B \le 1000$
- $0 \le C \le 1000$
- $A$, $B$, and $C$ are integers.

## Input

Input is given from Standard Input in the following format:

> $A$ $B$ $C$

## Output

If $A^2 + B^2 &lt; C^2$ holds, print `Yes`; otherwise, print `No`.  

```input1
2 2 4
```

```output1
Yes
```

Since $A^2 + B^2 = 2^2 + 2^2 = 8$ and $C^2 = 4^2 = 16$, we have $A^2 + B^2 &lt; C^2$, so we should print `Yes`.

```input2
10 10 10
```

```output2
No
```

Since $A^2 + B^2 = 200$ and $C^2 = 100$, $A^2 + B^2 &lt; C^2$ does not hold.

```input3
3 4 5
```

```output3
No
```