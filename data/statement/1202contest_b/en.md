Score : $100$ points

## Problem Statement

<font color="red">**This is an interactive problem. Because the judge program (interactor) requires around 1 second in the worst case, the time limit is set to be longer.**</font>

You have eventually reached the castle of Great Satan DEGwer after 10-year journey.
The entrance of the castle is a dungeon, which cannot avoid for arriving at DEGwer.

The dungeon is of form a grid with $H$ rows and $W$ columns.
Each of $H \times W$ squares is a room, and there is a **door** between any pair of adjacent rooms.
In addition, there is an **entrance door** on the left side of each room located in the left-most column, and there is an **exit door** on the right side of each room located in the right-most column.

Now, all the door are **unfixed**.
You want to let the dungeon such that some open exit door can be reached from some open entrance door by repeatedly passing through open doors, and DEGwer wants to prevent your objective.
For their own objectives, you and DEGwer alternately use the following magics.

- Your magic: Choose any unfixed door, fix it as open (passable).
- DEGwer's magic: Choose any unfixed door, fix it as closed (impassable).

You are given the size $(H, W)$ of the dungeon and who uses the magic first.
Determine whether your objective is achievable or not when you and DEGwer do their best.
In addition, if your objective is achievable, indicate <font color="red">**interactively**</font> one possible way (your magics) to do so.

## Constraints

- $1 \leq H \leq 20$
- $1 \leq W \leq 20$
- $\textrm{move}$ is either `First` or `Second`, where `First` means that you use the magic first, and `Second` means that DEGwer uses the magic first.

## Input

The input is given from Standard Input in the following format:

> $H$ $W$ $\textrm{move}$

## Output

Print `Yes` if your objective is achievable and `No` otherwise, under the assumption that you and DEGwer do their best.

In addition, if the answer is `Yes`, print <font color="red">**interactively**</font> in the following format for which doors you use magic. (See also Sample 2.)

> $t$ $i$ $j$

- $t$ is either `|` or `-`.
- $i$ and $j$ are integers.
- If $t = {}$`|`, then $1 \leq i \leq H$ and $1 \leq j \leq W + 1$, which represents that the door chosen as a target of the magic is the $i$-th from the top and the $j$-th from the left among those which are passed horizontally (i.e., the doors between two horizontally adjacent rooms and all the entrance and exit doors).
- If $t = {}$`-`, then $1 \leq i \leq H - 1$ and $1 \leq j \leq W$, which represents that the door chosen as a target of the magic is the $i$-th from the top and the $j$-th from the left among those which are passed vertically (i.e., the doors between two vertically adjacent rooms).

Against your output, an input in the same format will be returned.
Note that if $\textrm{move} = {}$`First`, then you should print your output followed by printing `Yes`, and if $\textrm{move} = {}$`Second`, then you should receive an input just after printing `Yes`.
In either case, <font color="red">**each time you print something, end it with a newline and flush Standard Output**</font>.

- $t$ is one of `|`, `-`, `a`, and `w`.
- If $t$ is either `|` or `-`, then it represents the door chosen by DEGwer in the same manner.
- If $t = {}$`a`, then $i = j = 0$, and it means that your interactive answer has been confirmed as a correct answer.
- If $t = {}$`w`, then $i = j = 0$, and it means that your interactive answer has been confirmed as a wrong answer.
- If you receive an input with $t = {}$`a` or $t = {}$`w`, your program must halt immediately.

```input1
1 1 First
```

```output1
No
```

In this case, the dungeon consists of only one room, whose left side has a unique entrance door and right side has a unique exit door.
For your objective, you have to fix both doors as open, but it cannot be done even if you use the magic first.
Thus, your objective is not achievable.

```input2
2 1 First
```

```output2
Yes
...
```

In this case, as shown in below, the dungeon consists of two vertically adjacent rooms, there is a unique vertically passable door between them, and the left and right sides of both rooms have two entrance and exit doors, respectively, in total.

```output2
| |
 -
| |
```

You use the magic first, and suppose that you choose the unique vertically passable door `- 1 1`.
Then, no matter how DEGwer will choose doors, you can choose one from the remaining two entrance doors and one from the remaining two exit doors, which achieve your objective because the two rooms became connected by your first magic.

The following is an example of interactive inputs and outputs.

Input   
Output 
Explanation

`2 1 First`

An input is given.

`Yes`
As your objective is achievable, you print `Yes`.

`- 1 1`
You fix as open one that is $1$st from the top and $1$st from the left among the vertically passable door.

`| 1 2`

DEGwer fixes as closed one that is $1$st from the top and $2$nd from the left among the horizontally passable doors, i.e., the upper-right exit door.

`| 2 2`
You fix as open one that is $2$nd from the top and $2$nd from the left among the horizontally passable doors, i.e., the lower-right exit door.

`| 2 1`

DEGwer fixes as closed one that is $2$nd from the top and $1$st from the left among the horizontally passable doors, i.e., the lower-left entrance door.

`| 1 1`
You fix as open one that is $1$st from the top and $1$st from the left among the horizontally passable doors, i.e., the upper-left entrance door.

`a 0 0`

At this point, it is confirmed that the open lower-right exit door can be reached from the open upper-left entrance door, and your program must halt immediately after receiving the input indicating it.

```input3
2 1 Second
```

```output3
No
```

The dungeon is the same as above, but your objective is not achievable as DEGwer uses the magic first.
For example, if DEGwer fixes the unique vertically passable door (that you choose first in Sample 2) as closed, then the situation is just like two parallel copies of Sample 1, in which your objective is not achievable even if you use the magic first.