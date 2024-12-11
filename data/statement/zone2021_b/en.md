Score : $200$ points

## Problem Statement

You are now standing under a very high tower, of height $1000$. At a position whose distance from the tower is $D$, there is a UFO up in the sky at height $H$ (see the figure at Sample Input / Output 1), and you want to send it a radio wave.<br>
There are $N$ obstacles between the tower and the UFO. The $i$-th obstacle stands at the position $d_i$ meters from the tower towards the UFO, and has a height of $h_i$.
You want to climb up the tower so that no obstacle crosses the line between you and the UFO. Find the minimum height you need to climb.<br>
We assume that the ground is a flat plane, and the towers and obstacles stand vertically from the ground.<br>
Additionally, if the top of an obstacle lies exactly on the line connecting you and the UFO, we assume that the obstacle does not cross that line.

## Constraints

- All values in input are integers.
- $1 \leq N \leq 100$
- $1 \leq d_i &lt; D \leq 1000$
- $1 \leq h_i &lt; H \leq 1000$

## Input

Input is given from Standard Input in the following format:

> $N$ $D$ $H$
> 
> $d_1$ $h_1$
> 
> $d_2$ $h_2$
> 
> $\vdots$
> 
> $d_N$ $h_N$

## Output

Print the answer.<br>
Your output will be judged as correct when its absolute or relative error from our answer is at most $10^{-3}$. 

```input1
1 10 10
3 5
```

```output1
2.857142857142857
```

If you climb the tower to the height of $\frac{20}{7}$, no obstacle will cross the line between you and the UFO, as shown below.

![](https://img.atcoder.jp/ghi/425da28ab0802405a8541ed16d81e5cf.png)

```input2
1 10 10
3 2
```

```output2
0.0
```

You can send a radio wave to the UFO without climbing up the tower.

```input3
5 896 483
228 59
529 310
339 60
78 266
659 391
```

```output3
245.3080684596577
```