<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Date 
{
	public static function getCronometro($data)
	{
		date_default_timezone_set('America/Sao_Paulo');
		$dif = strtotime($data->format('Y-m-d H:i:s')) - strtotime('now');
		$difDay = $dif / (60 * 60 * 24);
		$label = false;

		$h = null;
		$m = null;
		$s = null;

		$daysBetween = (date('j') - $data->format('j')) * -1;
		if($dif < 0)
		{
			$h = '0';
			$m = '0';
			$s = '0';
		}
		else if(intval($difDay) < 1)
		{
			$difTime = $dif / (60 * 60);
			$difHour = intval($difTime);
			$h = $difHour;
			$difMin = intval(($dif - ($difHour * 3600)) / 60);
			$m = $difMin;
			$difSec = intval($dif - (($difHour * 3600) + ($difMin * 60)));
			$s = $difSec;
		}
		else if(intval($difDay) == 1 && $daysBetween == 1)
		{
			$label = ' 1 dia';
		}
		else
		{
			$label = intval($daysBetween).' dias';
		}

		
		return array('label' => $label, 'h' => $h, 'm' => $m, 's' => $s);
	}
}
