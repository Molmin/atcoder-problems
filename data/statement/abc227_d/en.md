Score : $400$ points

## Problem Statement

KEYENCE has $N$ departments, where $A_i$ employees belong to the $i$-th department $(1 \leq i \leq N)$. No employee belongs to multiple departments.

The company is planning cross-departmental projects. Each project will be composed of exactly $K$ employees chosen from $K$ distinct departments.

At most how many projects can be made? No employee can participate in multiple projects.

## Constraints

- $1 \leq K \leq N \leq 2 \times 10^5$
- $1 \leq A_i \leq 10^{12}$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $K$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$

## Output

Print the maximum possible number of projects.

```input1
3 3
2 3 4
```

```output1
2
```

There can be two projects, each composed of three employees from distinct departments.

```input2
4 2
1 1 3 4
```

```output2
4
```

```input3
4 3
1 1 3 4
```

```output3
2
```