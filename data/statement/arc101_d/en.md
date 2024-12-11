Score : $900$ points

## Problem Statement

There are $N$ robots and $M$ exits on a number line.
The $N + M$ coordinates of these are all integers and all distinct.
For each $i$ ($1 \leq i \leq N$), the coordinate of the $i$-th robot from the left is $x_i$.
Also, for each $j$ ($1 \leq j \leq M$), the coordinate of the $j$-th exit from the left is $y_j$.

Snuke can repeatedly perform the following two kinds of operations in any order to move all the robots simultaneously:

- Increment the coordinates of all the robots on the number line by $1$.
- Decrement the coordinates of all the robots on the number line by $1$.

Each robot will disappear from the number line when its position coincides with that of an exit, going through that exit.
Snuke will continue performing operations until all the robots disappear.

When all the robots disappear, how many combinations of exits can be used by the robots?
Find the count modulo $10^9 + 7$.
Here, two combinations of exits are considered different when there is a robot that used different exits in those two combinations.

## Constraints

- $1 \leq N, M \leq 10^5$
- $1 \leq x_1 &lt; x_2 &lt; ... &lt; x_N \leq 10^9$
- $1 \leq y_1 &lt; y_2 &lt; ... &lt; y_M \leq 10^9$
- All given coordinates are integers.
- All given coordinates are distinct.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $x_1$ $x_2$ $...$ $x_N$
> 
> $y_1$ $y_2$ $...$ $y_M$

## Output

Print the number of the combinations of exits that can be used by the robots when all the robots disappear, modulo $10^9 + 7$.

```input1
2 2
2 3
1 4
```

```output1
3
```

The $i$-th robot from the left will be called Robot $i$, and the $j$-th exit from the left will be called Exit $j$.
There are three possible combinations of exits (the exit used by Robot $1$, the exit used by Robot $2$) as follows:

- $($Exit $1$$,$ Exit $1$$)$
- $($Exit $1$$,$ Exit $2$$)$
- $($Exit $2$$,$ Exit $2$$)$

```input2
3 4
2 5 10
1 3 7 13
```

```output2
8
```

The exit for each robot can be chosen independently, so there are $2^3 = 8$ possible combinations of exits.

```input3
4 1
1 2 4 5
3
```

```output3
1
```

Every robot uses Exit $1$.

```input4
4 5
2 5 7 11
1 3 6 9 13
```

```output4
6
```

```input5
10 10
4 13 15 18 19 20 21 22 25 27
1 5 11 12 14 16 23 26 29 30
```

```output5
22
```