Score : $100$ points

## Problem Statement

We have three boxes $A$, $B$, and $C$, each of which contains an integer.<br>
Currently, the boxes $A$, $B$, and $C$ contain the integers $X$, $Y$, and $Z$, respectively.<br>
We will now do the operations below in order. Find the content of each box afterward.  

- Swap the contents of the boxes $A$ and $B$
- Swap the contents of the boxes $A$ and $C$

## Constraints

- $1 \leq X,Y,Z \leq 100$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $X$ $Y$ $Z$

## Output

Print the integers contained in the boxes $A$, $B$, and $C$, in this order, with space in between.

```input1
1 2 3
```

```output1
3 1 2
```

After the contents of the boxes $A$ and $B$ are swapped, $A$, $B$, and $C$ contain $2$, $1$, and $3$, respectively.<br>
Then, after the contents of $A$ and $C$ are swapped, $A$, $B$, and $C$ contain $3$, $1$, and $2$, respectively.  

```input2
100 100 100
```

```output2
100 100 100
```

```input3
41 59 31
```

```output3
31 41 59
```