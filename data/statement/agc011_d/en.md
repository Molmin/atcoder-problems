Score : $900$ points

## Problem Statement

Takahashi has a lot of peculiar devices.
These cylindrical devices receive balls from left and right.
Each device is in one of the two states A and B, and for each state, the device operates as follows:

- When a device in state A receives a ball from either side (left or right), the device throws out the ball from the same side, then immediately goes into state B.
- When a device in state B receives a ball from either side, the device throws out the ball from the other side, then immediately goes into state A.

The transition of the state of a device happens momentarily and always completes before it receives another ball.

Takahashi built a contraption by concatenating $N$ of these devices. In this contraption,

- A ball that was thrown out from the right side of the $i$-th device from the left ($1 \leq i \leq N-1$) immediately enters the $(i+1)$-th device from the left side.
- A ball that was thrown out from the left side of the $i$-th device from the left ($2 \leq i \leq N$) immediately enters the $(i-1)$-th device from the right side.

The initial state of the $i$-th device from the left is represented by the $i$-th character in a string $S$.
From this situation, Takahashi performed the following $K$ times: put a ball into the leftmost device from the left side, then wait until the ball comes out of the contraption from either end.
Here, it can be proved that the ball always comes out of the contraption after a finite time.
Find the state of each device after $K$ balls are processed.

## Constraints

- $1 \leq N \leq 200,000$
- $1 \leq K \leq 10^9$
- $|S|=N$
- Each character in $S$ is either `A` or `B`.

## Input

The input is given from Standard Input in the following format:

> $N$ $K$
> 
> $S$

## Output

Print a string that represents the state of each device after $K$ balls are processed.
The string must be $N$ characters long, and the $i$-th character must correspond to the state of the $i$-th device from the left.

```input1
5 1
ABAAA
```

```output1
BBAAA
```

In this input, we put a ball into the leftmost device from the left side, then it is returned from the same place.

```input2
5 2
ABAAA
```

```output2
ABBBA
```

```input3
4 123456789
AABB
```

```output3
BABA
```