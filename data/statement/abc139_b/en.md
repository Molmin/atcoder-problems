Score : $200$ points

## Problem Statement

Takahashi's house has only one socket.

Takahashi wants to extend it with some number of power strips, each with $A$ sockets, into $B$ or more empty sockets.

One power strip with $A$ sockets can extend one empty socket into $A$ empty sockets.

Find the minimum number of power strips required.

## Constraints

- All values in input are integers.
- $2 \leq A \leq 20$
- $1 \leq B \leq 20$

## Input

Input is given from Standard Input in the following format:

> $A$ $B$

## Output

Print the minimum number of power strips required.

```input1
4 10
```

```output1
3
```

$3$ power strips, each with $4$ sockets, extend the socket into $10$ empty sockets.

```input2
8 9
```

```output2
2
```

$2$ power strips, each with $8$ sockets, extend the socket into $15$ empty sockets.

```input3
8 8
```

```output3
1
```