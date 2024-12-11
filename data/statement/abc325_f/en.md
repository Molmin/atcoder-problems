Score : $500$ points

## Problem Statement

As the factory manager of Keyence, you want to monitor several sections on a conveyor belt. There are a total of $N$ sections you want to monitor, and the length of the $i$-th section is $D_i$ meters.

There are two types of sensors to choose from, and below is some information about each sensor.

- Type-$j$ sensor $(1\leq j \leq 2)$: Can monitor a section of length $L_j$ meters.
The price is $C_j$ per sensor, and you can use at most $K_j$ sensors of this type in total.

You can divide one section into several sections for monitoring.
It is fine if the sections monitored by the sensors overlap, or if they monitor more than the length of the section you want to monitor.
For example, when $L_1=4$ and $L_2=2$, you can use one type-$1$ sensor to monitor a section of length $3$ meters, or use one type-$1$ and one type-$2$ sensor to monitor a section of length $5$ meters.

Determine whether it is possible to monitor all $N$ sections, and if it is possible, find the minimum total cost of the necessary sensors.

## Constraints

- $1\leq N \leq 100$
- $1\leq D_i,L_j \leq 10^5$
- $1\leq C_j \leq 10^9$
- $1\leq K_j \leq 10^3$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $D_1$ $D_2$ $\dots$ $D_N$
> 
> $L_1$ $C_1$ $K_1$
> 
> $L_2$ $C_2$ $K_2$

## Output

If it is impossible to monitor all $N$ sections, print `-1`. Otherwise, print the minimum total cost of the necessary sensors.

```input1
3
3 5 10
4 3 3
2 2 6
```

```output1
17
```

You can monitor all sections by using three type-$1$ sensors and four type-$2$ sensors as follows.

- Use one type-$1$ sensor to monitor the first section.
- Use one type-$1$ and one type-$2$ sensor to monitor the second section.
- Use one type-$1$ and three type-$2$ sensors to monitor the third section.

In this case, the total cost of the necessary sensors is $3\times 3 + 2\times 4 = 17$, which is the minimum.

```input2
3
3 5 10
4 3 3
2 2 3
```

```output2
-1
```

```input3
2
4 8
3 1 100
4 10000 100
```

```output3
5
```

It is fine if one type of sensor is not used at all.