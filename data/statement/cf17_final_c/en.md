Score : $500$ points

## Problem Statement

In CODE FESTIVAL XXXX, there are $N+1$ participants from all over the world, including Takahashi.

Takahashi checked and found that the *time gap* (defined below) between the local times in his city and the $i$-th person's city was $D_i$ hours.
The time gap between two cities is defined as follows. For two cities A and B, if the local time in city B is $d$ o'clock at the moment when the local time in city A is $0$ o'clock, then the time gap between these two cities is defined to be $min(d,24-d)$ hours.
Here, we are using $24$-hour notation.
That is, the local time in the $i$-th person's city is either $d$ o'clock or $24-d$ o'clock at the moment when the local time in Takahashi's city is $0$ o'clock, for example.

Then, for each pair of two people chosen from the $N+1$ people, he wrote out the time gap between their cities. Let the smallest time gap among them be $s$ hours.

Find the maximum possible value of $s$.

## Constraints

- $1 \leq N \leq 50$
- $0 \leq D_i \leq 12$
- All input values are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $D_1$ $D_2$ $...$ $D_N$

## Output

Print the maximum possible value of $s$.

```input1
3
7 12 8
```

```output1
4
```

For example, consider the situation where it is $7$, $12$ and $16$ o'clock in each person's city at the moment when it is $0$ o'clock in Takahashi's city. In this case, the time gap between the second and third persons' cities is $4$ hours.

```input2
2
11 11
```

```output2
2
```

```input3
1
0
```

```output3
0
```

Note that Takahashi himself is also a participant.