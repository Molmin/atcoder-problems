Score : $250$ points

## Problem Statement

You are trying to implement collision detection in a 3D game.

In a $3$-dimensional space, let $C(a,b,c,d,e,f)$ denote the cuboid with a diagonal connecting $(a,b,c)$ and $(d,e,f)$, and with all faces parallel to the $xy$-plane, $yz$-plane, or $zx$-plane.<br>
(This definition uniquely determines $C(a,b,c,d,e,f)$.)

Given two cuboids $C(a,b,c,d,e,f)$ and $C(g,h,i,j,k,l)$, determine whether their intersection has a positive volume.

## Constraints

- $0 \leq a &lt; d \leq 1000$
- $0 \leq b &lt; e \leq 1000$
- $0 \leq c &lt; f \leq 1000$
- $0 \leq g &lt; j \leq 1000$
- $0 \leq h &lt; k \leq 1000$
- $0 \leq i &lt; l \leq 1000$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $a$ $b$ $c$ $d$ $e$ $f$
> 
> $g$ $h$ $i$ $j$ $k$ $l$

## Output

Print `Yes` if the intersection of the two cuboids has a positive volume, and `No` otherwise.

```input1
0 0 0 4 5 6
2 3 4 5 6 7
```

```output1
Yes
```

The positional relationship of the two cuboids is shown in the figure below, and their intersection has a volume of $8$.

![](https://img.atcoder.jp/abc361/12ad1f07f2801946704198807bbb3395.png)

```input2
0 0 0 2 2 2
0 0 2 2 2 4
```

```output2
No
```

The two cuboids touch at a face, where the volume of the intersection is $0$.

```input3
0 0 0 1000 1000 1000
10 10 10 100 100 100
```

```output3
Yes
```