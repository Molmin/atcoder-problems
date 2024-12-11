Score: $300$ points

## Problem Statement

In 2028 and after a continuous growth, AtCoder Inc. finally built an empire with six cities (City $1, 2, 3, 4, 5, 6$)!

There are five means of transport in this empire:

- Train: travels from City $1$ to $2$ in one minute. A train can occupy at most $A$ people.
- Bus: travels from City $2$ to $3$ in one minute. A bus can occupy at most $B$ people.
- Taxi: travels from City $3$ to $4$ in one minute. A taxi can occupy at most $C$ people.
- Airplane: travels from City $4$ to $5$ in one minute. An airplane can occupy at most $D$ people.
- Ship: travels from City $5$ to $6$ in one minute. A ship can occupy at most $E$ people.

For each of them, one vehicle leaves the city at each integer time (time $0$, $1$, $2$, $...$).

There is a group of $N$ people at City $1$, and they all want to go to City $6$.<br>
At least how long does it take for all of them to reach there? 
You can ignore the time needed to transfer.  

## Constraints

- $1 \leq N, A, B, C, D, E \leq 10^{15}$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A$
> 
> $B$
> 
> $C$
> 
> $D$
> 
> $E$

## Output

Print the minimum time required for all of the people to reach City $6$, in minutes.

```input1
5
3
2
4
3
5
```

```output1
7
```

One possible way to travel is as follows.
First, there are $N = 5$ people at City $1$, as shown in the following image:

![](https://img.atcoder.jp/ghi/9c306138eddc8a2e08acfa5da19bdfe8.png)

In the first minute, three people travels from City $1$ to City $2$ by train. Note that a train can only occupy at most three people.

![](https://img.atcoder.jp/ghi/bd30b5ab37fc06951c9f5256bb974e4f.png)

In the second minute, the remaining two people travels from City $1$ to City $2$ by train, and two of the three people who were already at City $2$ travels to City $3$ by bus. Note that a bus can only occupy at most two people.

![](https://img.atcoder.jp/ghi/50f2e49a770a30193fc53588ec8475b3.png)

In the third minute, two people travels from City $2$ to City $3$ by train, and another two people travels from City $3$ to City $4$ by taxi.

![](https://img.atcoder.jp/ghi/d6d80dc50abe58190905c8c5ea6ba345.png)

From then on, if they continue traveling without stopping until they reach City $6$, all of them can reach there in seven minutes.<br>
There is no way for them to reach City $6$ in $6$ minutes or less.

```input2
10
123
123
123
123
123
```

```output2
5
```

All kinds of vehicles can occupy $N = 10$ people at a time.
Thus, if they continue traveling without stopping until they reach City $6$, all of them can reach there in five minutes.  

```input3
10000000007
2
3
5
7
11
```

```output3
5000000008
```

Note that the input or output may not fit into a $32$-bit integer type.