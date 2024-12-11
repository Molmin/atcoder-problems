Score : $700$ points

## Problem Statement

You have an integer sequence of length $N$: $a_1, a_2, ..., a_N$.

You repeatedly perform the following operation until the length of the sequence becomes $1$:

- First, choose an element of the sequence.
- If that element is at either end of the sequence, delete the element.
- If that element is not at either end of the sequence, replace the element with the sum of the two elements that are adjacent to it. Then, delete those two elements.

You would like to maximize the final element that remains in the sequence.

Find the maximum possible value of the final element, and the way to achieve it.

## Constraints

- All input values are integers.
- $2 \leq N \leq 1000$
- $|a_i| \leq 10^9$

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $a_1$ $a_2$ $...$ $a_N$

## Output

- In the first line, print the maximum possible value of the final element in the sequence.
- In the second line, print the number of operations that you perform.
- In the $(2+i)$-th line, if the element chosen in the $i$-th operation is the $x$-th element from the left in the sequence at that moment, print $x$.
- If there are multiple ways to achieve the maximum value of the final element, any of them may be printed.

```input1
5
1 4 3 7 5
```

```output1
11
3
1
4
2
```

The sequence would change as follows:

- After the first operation: $4, 3, 7, 5$
- After the second operation: $4, 3, 7$
- After the third operation: $11(4+7)$

```input2
4
100 100 -1 100
```

```output2
200
2
3
1
```

- After the first operation: $100, 200(100+100)$
- After the second operation: $200$

```input3
6
-1 -2 -3 1 2 3
```

```output3
4
3
2
1
2
```

- After the first operation: $-4, 1, 2, 3$
- After the second operation: $1, 2, 3$
- After the third operation: $4$

```input4
9
1000000000 1000000000 1000000000 1000000000 1000000000 1000000000 1000000000 1000000000 1000000000
```

```output4
5000000000
4
2
2
2
2
```