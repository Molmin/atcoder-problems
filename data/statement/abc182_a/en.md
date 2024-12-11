Score : $100$ points

## Problem Statement

You are on a social networking site called twiblr.<br>
In twiblr, you can follow at most $2\,\times\,($ the number of users following you $)\,+\,100$ users.<br>
You are currently following $B$ users, and $A$ users are following you.<br>
At most, how many extra users can you follow now?  

## Constraints

- $0 \le A, B \le 10000$
- $B \le 2 \times A + 100$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $A$ $B$

## Output

Print the maximum number of extra users you can follow now.

```input1
200 300
```

```output1
200
```

You can follow at most $2 \times 200 + 100 = 500$ users, that is, $200$ more users than you are following now.

```input2
10000 0
```

```output2
20100
```