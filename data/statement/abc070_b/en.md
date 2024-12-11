Score : $200$ points

## Problem Statement

Alice and Bob are controlling a robot. They each have one switch that controls the robot.<br>
Alice started holding down her button $A$ second after the start-up of the robot, and released her button $B$ second after the start-up.<br>
Bob started holding down his button $C$ second after the start-up, and released his button $D$ second after the start-up.<br>
For how many seconds both Alice and Bob were holding down their buttons?

## Constraints

- $0 \leq A&lt;B \leq 100$
- $0 \leq C&lt;D \leq 100$
- All input values are integers.

## Input

Input is given from Standard Input in the following format:  

> $A$ $B$ $C$ $D$

## Output

Print the length of the duration (in seconds) in which both Alice and Bob were holding down their buttons.

```input1
0 75 25 100
```

```output1
50
```

Alice started holding down her button $0$ second after the start-up of the robot, and released her button $75$ second after the start-up.<br>
Bob started holding down his button $25$ second after the start-up, and released his button $100$ second after the start-up.<br>
Therefore, the time when both of them were holding down their buttons, is the $50$ seconds from $25$ seconds after the start-up to $75$ seconds after the start-up.

```input2
0 33 66 99
```

```output2
0
```

Alice and Bob were not holding their buttons at the same time, so the answer is zero seconds.

```input3
10 90 20 80
```

```output3
60
```