Score : $500$ points

## Problem Statement

You are given an integer array $A=(a_1,a_2,\ldots,a_N)$.<br>
You may perform the following operation any number of times (possibly zero).

- Choose a nonempty contiguous subarray of $A$, and delete it from the array.

For each $x=1,2,\ldots,M$, solve the following problem:

- Find the minimum possible number of operations to make the sum of elements of $A$ equal $x$.
If it is impossible to make the sum of elements of $A$ equal $x$, print `-1` instead.

Note that the sum of elements of an empty array is $0$.

## Constraints

- $1 \leq N,M \leq 3000$
- $1 \leq a_i \leq 3000$
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $a_1$ $\ldots$ $a_N$

## Output

Print $M$ lines. The $i$-th line should contain the answer for $x=i$.

```input1
4 5
1 2 3 4
```

```output1
1
2
1
1
1
```

The followings are examples of minimum number of operations that achieve the goal.

- For $x=1$, delete $a_2,a_3,a_4$, and the sum of elements of $A$ becomes $x$.
- For $x=2$, delete $a_3,a_4$, then delete $a_1$, and the sum of elements of $A$ becomes $x$.
- For $x=3$, delete $a_3,a_4$, and the sum of elements of $A$ becomes $x$.
- For $x=4$, delete $a_1,a_2,a_3$, and the sum of elements of $A$ becomes $x$.
- For $x=5$, delete $a_2,a_3$, and the sum of elements of $A$ becomes $x$.

```input2
1 5
3
```

```output2
-1
-1
0
-1
-1
```

```input3
12 20
2 5 6 5 2 1 7 9 7 2 5 5
```

```output3
2
1
2
2
1
2
1
2
2
1
2
1
1
1
2
2
1
1
1
1
```