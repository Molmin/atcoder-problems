Score : $800$ points

## Problem Statement

$N$ cells are arranged in a row.
The cells are numbered $1$ through $N$ from left to right.

Initially, all cells are empty.
You can perform the following two types of operation arbitrary number of times in arbitrary order:

- Choose three **consecutive** empty cells, and put a coin on each of the three cells.
- Choose three **consecutive** cells with coins, and remove all three coins on the chosen cells.

After you finish performing operations, if the $i$-th cell contains a coin, you get $a_i$ points.
Your score is the sum of all points you get from the cells with coins.

Compute the maximum possible score you can earn.

## Constraints

- $3 \leq N \leq 500$
- $-100 \leq a_i \leq 100$
- All values in the input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $a_1$
> 
> $a_2$
> 
> $:$
> 
> $a_N$

## Output

Print the answer.

```input1
4
1
2
3
4
```

```output1
9
```

We represent a cell with a coin as `o` and a cell without a coin as `.` (a dot).
One optimal way is as follows:

`....` $\rightarrow$ `.ooo`

We get $2 + 3 + 4 = 9$ points this way.

```input2
6
3
-2
-1
0
-1
4
```

```output2
6
```

One optimal way is as follows:

`......` $\rightarrow$ `ooo...` $\rightarrow$ `oooooo` $\rightarrow$ `o...oo`

We get $3 + (-1) + 4 = 6$ points this way.

```input3
10
-84
-60
-41
-100
8
-8
-52
-62
-61
-76
```

```output3
0
```