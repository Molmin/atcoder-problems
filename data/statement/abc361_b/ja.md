配点 : $250$ 点

## 問題文

あなたは3Dゲームの当たり判定を実装しようとしています。

$3$ 次元空間内の直方体であって、$2$ 点 $(a,b,c),(d,e,f)$ を結ぶ線分を対角線とし、全ての面が $xy$ 平面、$yz$ 平面、$zx$ 平面のいずれかに平行なものを $C(a,b,c,d,e,f)$ と表します。<br>
（この定義により $C(a,b,c,d,e,f)$ は一意に定まります）

$2$ つの直方体 $C(a,b,c,d,e,f)$ と $C(g,h,i,j,k,l)$ が与えられるので、これらの共通部分の体積が正かどうか判定してください。

## 制約

- $0 \leq a &lt; d \leq 1000$
- $0 \leq b &lt; e \leq 1000$
- $0 \leq c &lt; f \leq 1000$
- $0 \leq g &lt; j \leq 1000$
- $0 \leq h &lt; k \leq 1000$
- $0 \leq i &lt; l \leq 1000$
- 入力は全て整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $a$ $b$ $c$ $d$ $e$ $f$
> 
> $g$ $h$ $i$ $j$ $k$ $l$

## 出力

$2$ つの直方体の共通部分の体積が正なら `Yes`、そうでなければ `No` を出力せよ。

```input1
0 0 0 4 5 6
2 3 4 5 6 7
```

```output1
Yes
```

$2$ つの直方体の位置関係は下図のようになっており、共通部分の体積は $8$ です。

![](https://img.atcoder.jp/abc361/12ad1f07f2801946704198807bbb3395.png)

```input2
0 0 0 2 2 2
0 0 2 2 2 4
```

```output2
No
```

$2$ つの直方体は面で接していますが、共通部分の体積は $0$ です。

```input3
0 0 0 1000 1000 1000
10 10 10 100 100 100
```

```output3
Yes
```