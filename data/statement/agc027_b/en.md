Score : $700$ points

## Problem Statement

Snuke has decided to use a robot to clean his room.

There are $N$ pieces of trash on a number line.
The $i$-th piece from the left is at position $x_i$.
We would like to put all of them in a trash bin at position $0$.

For the positions of the pieces of trash, $0 &lt; x_1 &lt; x_2 &lt; ... &lt; x_{N} \leq 10^{9}$ holds.

The robot is initially at position $0$.
It can freely move left and right along the number line, pick up a piece of trash when it comes to the position of that piece, carry any number of pieces of trash and put them in the trash bin when it comes to position $0$. It is not allowed to put pieces of trash anywhere except in the trash bin.

The robot consumes $X$ points of energy when the robot picks up a piece of trash, or put pieces of trash in the trash bin. (Putting any number of pieces of trash in the trash bin consumes $X$ points of energy.)
Also, the robot consumes $(k+1)^{2}$ points of energy to travel by a distance of $1$ when the robot is carrying $k$ pieces of trash.

Find the minimum amount of energy required to put all the $N$ pieces of trash in the trash bin.

## Constraints

- $1 \leq N \leq 2 \times 10^{5}$
- $0 &lt; x_1 &lt; ... &lt; x_N \leq 10^9$
- $1 \leq X \leq 10^9$
- All values in input are integers.

## Partial Scores

- $400$ points will be awarded for passing the test set satisfying $N \leq 2000$.

## Input

Input is given from Standard Input in the following format:

> $N$ $X$
> 
> $x_1$ $x_2$ $...$ $x_{N}$

## Output

Print the answer.

```input1
2 100
1 10
```

```output1
355
```

- Travel to position $10$ by consuming $10$ points of energy.
- Pick up the piece of trash by consuming $100$ points of energy.
- Travel to position $1$ by consuming $36$ points of energy.
- Pick up the piece of trash by consuming $100$ points of energy.
- Travel to position $0$ by consuming $9$ points of energy.
- Put the two pieces of trash in the trash bin by consuming $100$ points of energy.

This strategy consumes a total of $10+100+36+100+9+100=355$ points of energy.

```input2
5 1
1 999999997 999999998 999999999 1000000000
```

```output2
19999999983
```

```input3
10 8851025
38 87 668 3175 22601 65499 90236 790604 4290609 4894746
```

```output3
150710136
```

```input4
16 10
1 7 12 27 52 75 731 13856 395504 534840 1276551 2356789 9384806 19108104 82684732 535447408
```

```output4
3256017715
```